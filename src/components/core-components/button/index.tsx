import { Button, colors } from "@mui/material";


interface ButtonProps extends React.ComponentProps<typeof Button> {

    buttonType?: "primary" | "secondary" | "danger" | "success"
}


const GButton: React.FC<ButtonProps> = ({ variant = "contained", ...rest }) => {

    switch (rest.buttonType) {
        case "primary":
            rest.style = { backgroundColor: colors.blue[500], color: colors.common.white }
            break;
        case "secondary":
            rest.style = { backgroundColor: colors.grey[500], color: colors.common.white }
            break;
        case "danger":
            rest.style = { backgroundColor: colors.red[500], color: colors.common.white }
            break;
        case "success":
            rest.style = { backgroundColor: colors.green[500], color: colors.common.white }
            break;
    }
    

    return <Button {...rest} />
}

export default GButton;