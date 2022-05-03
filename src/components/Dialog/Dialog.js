import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import Typography from "../Typography/Typography";
import { StyledDialog } from './Dialog.styled';
import Button from "../Button/Button";
import Theme from '../../Theme/Theme';

export default function DialogComponent({ opendialogbackground, opendialogtextcolor = Theme.typography.white, opendialogwidth = 5, opendialogheight = 5, titlelabel = "Accept all Cookies", opendialoglabel = "Manage Cookies", titlecolor = "blue" }) {
    const [isOpen, setIsOpen] = useState(true);
    const StyledTitle = StyledDialog(Dialog.Title);
    const setOpen = () => { setIsOpen(true); }
    return (
        <>
            <Button Component={<Typography label="Hello World" variant="p" color="red" />} background={Theme.background.light} width={opendialogwidth} height={opendialogheight} onclick={setOpen}>
            </Button>
            <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
                <Dialog.Overlay />

                <StyledTitle titlecolor={titlecolor}>{titlelabel}</StyledTitle>
                <Dialog.Description>
                    This will permanently deactivate your account
                </Dialog.Description>

                <p>
                    Are you sure you want to deactivate your account? All of your data will
                    be permanently removed. This action cannot be undone.
                </p>

                <button onClick={() => setIsOpen(false)}>Deactivate</button>
                <button onClick={() => setIsOpen(false)}>Cancel</button>
            </Dialog>
        </>
    );
}