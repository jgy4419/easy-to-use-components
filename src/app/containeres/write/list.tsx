import React from 'react';
import * as S from "./style/list";
import {Button, Menu, MenuItem} from "@mui/material";

const List = ({title, list}: {title: string, list: string[]}) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <S.ListContainer>
                <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    {title}
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    {
                        list.map((item, index) => {
                            return (
                                <MenuItem onClick={handleClose} key={index}>{item}</MenuItem>
                            )
                        })
                    }
                </Menu>
            </S.ListContainer>
        </>
    );
};

export default List;