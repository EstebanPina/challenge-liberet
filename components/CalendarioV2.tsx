import * as React from 'react';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { styled } from '@mui/material/styles';
import Dia from './Dia';
import { orange } from '@mui/material/colors';
const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  '& .MuiToggleButtonGroup-grouped': {
    margin: theme.spacing(0),
    border: 0,
    fontSize:1,
    '&.Mui-disabled': {
      border: 0,
    },
    '&:not(:first-of-type)': {
      borderRadius: theme.shape.borderRadius,
    },
    '&:first-of-type': {
      borderRadius: theme.shape.borderRadius,
    },
  },
}));
export default function CalendarioV2() {
    const [alignment, setAlignment] = React.useState<string | null>('left');

    const handleAlignment = (
      event: React.MouseEvent<HTMLElement>,
      newAlignment: string | null,
    ) => {
      setAlignment(newAlignment);
    };
  
    return (
      <div className='w-full flex flex-row justify-center'>
      <StyledToggleButtonGroup
        value={alignment}
        color="error"
        exclusive
        onChange={handleAlignment}
        aria-label="Dias"
        className='w-full flex flex-row justify-center bg-white'
        

      >
        <ToggleButton value="1" aria-label="Lunes">
        <Dia Nombre={"Lun"} Numero={"1"}/>
        </ToggleButton>
        <ToggleButton value="2" aria-label="Martes">
        <Dia Nombre={"Mar"} Numero={"2"}/>
        </ToggleButton>
        <ToggleButton value="3" aria-label="Miercoles">
        <Dia Nombre={"Mie"} Numero={"3"}/>
        </ToggleButton>
        <ToggleButton value="4" aria-label="Jueves">
        <Dia Nombre={"Jue"} Numero={"4"}/>
        </ToggleButton>
        <ToggleButton value="5" aria-label="Viernes">
        <Dia Nombre={"Vie"} Numero={"5"}/>
        </ToggleButton>
        <ToggleButton value="6" aria-label="Sabado">
        <Dia Nombre={"Sab"} Numero={"6"}/>
        </ToggleButton>
        <ToggleButton value="7" aria-label="Domingo">
        <Dia Nombre={"Dom"} Numero={"7"}/>
        </ToggleButton>
      </StyledToggleButtonGroup>
      </div>
    );
  }