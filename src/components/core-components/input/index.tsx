import React from 'react';
import TextField from '@mui/material/TextField';

interface GInputProps extends React.ComponentProps<typeof TextField> {
    label: string;
}

const GInput: React.FC<GInputProps> = ({ label, ...props }) => {
    return (
        <TextField
            label={label}
            variant="outlined"
            {...props}
        />
    );
};

export default GInput;