import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText } from "@mui/material"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { MouseEventHandler, useContext, useEffect, useState } from "react"
import { useNavigate, useLocation } from "react-router";
import { SessionContext } from "../../contexts/Session/SessionContext";

export interface IRoute {
    text: string,
    path: string
}

interface INavBarProps {
    thereIsAnyToken: boolean,
    userName: string,
    closeSession: MouseEventHandler,
    routes: IRoute[]
}

const NavBar:React.FunctionComponent<INavBarProps> = props => {
    const navigate = useNavigate();
    const location = useLocation();
    const sessionContext = useContext(SessionContext);

    useEffect(()=>{
        if(sessionContext.token==="" && location.pathname !== "/login") {
            navigate("/login");
        }
    },[navigate, location.pathname, sessionContext.token])

    const [opened, setOpened] = useState(false);
    return (
        <Box>
            <AppBar position="static">
                <Toolbar>
                {   props.thereIsAnyToken ? 
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={()=>setOpened(true)}
                    >
                        <MenuIcon />
                    </IconButton> : <></>
                }
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Hackathons Viewer
                </Typography>
                {
                    !props.thereIsAnyToken ? 
                    <Button onClick={()=>navigate("/login")} color="inherit">Iniciar Sesión</Button>
                    :
                    <>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Usuario: {props.userName}
                        </Typography>
                        <Button onClick={props.closeSession} color="inherit">Cerrar Sesión</Button>
                    </>
                }
                </Toolbar>
            </AppBar>
            {   props.thereIsAnyToken ? 
                <Drawer
                    anchor={"left"}
                    open={opened}
                    onClose={()=>setOpened(false)}
                >
                    <List>
                        <Divider />
                        {props.routes.map((route, index) => {
                            return (
                                <ListItem button key={index} onClick={()=>{navigate(route.path)}}>
                                    <ListItemIcon>
                                    </ListItemIcon>
                                    <ListItemText primary={route.text} />
                                </ListItem>
                            )
                        })
                        }
                    </List>
                </Drawer> : <></>
            }
        </Box>
    )
}

export default NavBar