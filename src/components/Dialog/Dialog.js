import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import Typography from "../Typography/Typography";
import { StyledDialog } from './Dialog.styled';
import Button from "../Button/Button";
import Theme from '../../Theme/Theme';

export default function DialogComponent({ descriptioncolor = Theme.typography.white, dialogwidth = 30, dialogheight = 15, opendialogbackground = Theme.background.light, opendialogtextcolor = Theme.typography.white, opendialogwidth = 5, opendialogheight = 5, titlelabel = "Accept all Cookies", opendialoglabel = "Manage Cookies", titlecolor = "blue" }) {
    const [isOpen, setIsOpen] = useState(true);
    const StyledDialogContainer = StyledDialog(Dialog);
    const StyledTitle = StyledDialog(Dialog.Title);
    const StyledDescription = StyledDialog(Dialog.Description);

    return (
        <>
            <Button padding={1} Component={<Typography label={opendialoglabel} variant="p" color={opendialogtextcolor} />} background={opendialogbackground} width={opendialogwidth} height={opendialogheight} onclick={() => setIsOpen(!isOpen)}>
            </Button>
            <StyledDialogContainer dialogwidth={dialogwidth} dialogheight={dialogheight} open={isOpen} onClose={() => setIsOpen(false)}>
                {/* <Dialog.Overlay /> */}
                <StyledTitle titlecolor={titlecolor}>{titlelabel}</StyledTitle>
                <StyledDescription descriptioncolor={descriptioncolor}>
                    This will permanently deactivate your account
                </StyledDescription>

                <p>
                    Are you sure you want to deactivate your account? All of your data will
                    be permanently removed. This action cannot be undone.
                </p>

                <button onClick={() => setIsOpen(false)}>Deactivate</button>
                <button onClick={() => setIsOpen(false)}>Cancel</button>
            </StyledDialogContainer>
        </>
    );
}