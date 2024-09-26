import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion";
import MenuIcon from "@mui/icons-material/Menu";
import MailIcon from "@mui/icons-material/Mail";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import ListItemIcon from "@mui/material/ListItemIcon";
import styled from "styled-components";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import * as React from "react";
import { Anchor } from "./type";
import { headerList } from "@/app/constants/main";
import { useRouter } from "next/navigation";

export const MenuList = (anchor: Anchor) => {
    const IconList = [<AutoAwesomeMotionIcon key={1} sx={{color: "#fff"}} />, <MenuIcon key={2} sx={{color: "#fff"}}/>, <MailIcon key={3} sx={{color: "#fff"}}/>];
    const router = useRouter();

    const listClickHandler = (event: React.MouseEvent) => {
        if("textContent" in event.target) {
            let str = event.target.textContent as string;
            router.push(str);
        }
    }

    return (
        <>
            <Container
                sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
                role="button"
            >
                <MainList sx={{marginTop: "30px"}}>
                    {['Home', 'About', 'Components'].map((text) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </MainList>
                <Divider sx={{background: "#fff"}}/>
                <MainList>
                    {[...headerList.components].map((text, index) => (
                        <ListItem key={text} disablePadding
                                  onClick={listClickHandler}
                        >
                            <ListItemButton>
                                <ListItemIcon>
                                    {IconList[index]}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </MainList>
            </Container>
        </>
    )
}

const MainList = styled(List)`
`;

const Container = styled(Box)`
    background: rgb(27 29 30);
    color: #fff;
    height: 100%;
`;