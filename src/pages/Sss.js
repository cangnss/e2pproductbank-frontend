import { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Grid } from "@mui/material";
import SssPhoto from "../assets/images/SssPhoto.jpg";

// const styledButton = style(Button)`
//     &:hover{
//         background-color:none;
//     }
// `;

const Sss = () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);
  return (
    <>
    
      <Grid container direction="row">
      <Grid item lg={6} xl={6} mt={6}>
          <img style={{}} width="75%" height="75%" src={SssPhoto} alt="" />
        </Grid>

        <Grid item xl={6} lg={6} mt={5} sx={{display:"flex", justifyContent:"center", flexDirection:"column"}} >
          <Grid
            mb={5}
            item
            sx={{
              width:"65%", mx:"auto"
             
            }}
          >
            <Card
              sx={{
                
                border: "3px solid #283991",
                boxShadow:
                  "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
              }}
            >
              <CardHeader
                title="E2PproductBank Nedir?"
                action={
                  <IconButton
                    sx={{
                      color: "white",
                      backgroundColor: "#283991",
                      ":hover": {
                        color: "white",
                        backgroundColor: "#283991",
                      },
                    }}
                    onClick={() => setOpen1(!open1)}
                    aria-label="expand"
                    size="small"
                  >
                    {open1 ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                  </IconButton>
                }
              ></CardHeader>
              <div style={{ backgroundColor: "rgba(211,211,211,0.4)" }}>
                <Collapse in={open1} timeout="auto" unmountOnExit>
                  <CardContent
                    sx={{
                      backgroundColor: "white",
                      border: "solid",
                      borderRightStyle: "none",
                      borderBottomStyle: " none",
                      borderLeftStyle: "none",
                    }}
                  >
                    <Container sx={{ height: 36, lineHeight: 2 }}>
                      {" "}
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Fugiat asperiores hic eum vero sapiente eligendi saepe
                      repudiandae at laboriosam pariatur minus facere veritatis,
                      unde reiciendis.{" "}
                    </Container>
                  </CardContent>
                </Collapse>
              </div>
            </Card>
          </Grid>

          <Grid
            item
            mb={5}
            sx={{
              width:"65%", mx:"auto"
             
            }}
          >
            <Card
              sx={{
              
                border: "3px solid #283991",
                boxShadow:
                  "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
              }}
            >
              <CardHeader
                title="E2PproductBank Ne Amaçla Kullanılır?"
                action={
                  <IconButton
                    sx={{
                      color: "white",
                      backgroundColor: "#283991",
                      ":hover": {
                        color: "white",
                        backgroundColor: "#283991",
                      },
                    }}
                    onClick={() => setOpen2(!open2)}
                    aria-label="expand"
                    size="small"
                  >
                    {open2 ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                  </IconButton>
                }
              ></CardHeader>
              <div style={{ backgroundColor: "rgba(211,211,211,0.4)" }}>
                <Collapse in={open2} timeout="auto" unmountOnExit>
                  <CardContent
                    sx={{
                      backgroundColor: "white",
                      border: "solid",
                      borderRightStyle: "none",
                      borderBottomStyle: " none",
                      borderLeftStyle: "none",
                    }}
                  >
                    <Container sx={{ height: 36, lineHeight: 2 }}>
                      {" "}
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Temporibus consequuntur fugit accusantium sunt, ad quod
                      maiores, magni qui autem veniam odio, sint omnis molestias
                      tempore cumque saepe unde voluptatibus vel.{" "}
                    </Container>
                  </CardContent>
                </Collapse>
              </div>
            </Card>
          </Grid>

          <Grid
            item
            mb={5}
            sx={{
              width:"65%", mx:"auto"
             
            }}
          >
            <Card
              sx={{
                
                border: "3px solid #283991",
                boxShadow:
                  "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
              }}
            >
              <CardHeader
                title="E2PproductBank Ne Amaçla Kullanılır?"
                action={
                  <IconButton
                    sx={{
                      color: "white",
                      backgroundColor: "#283991",
                      ":hover": {
                        color: "white",
                        backgroundColor: "#283991",
                      },
                    }}
                    onClick={() => setOpen3(!open3)}
                    aria-label="expand"
                    size="small"
                  >
                    {open3 ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                  </IconButton>
                }
              ></CardHeader>
              <div style={{ backgroundColor: "rgba(211,211,211,0.4)" }}>
                <Collapse in={open3} timeout="auto" unmountOnExit>
                  <CardContent
                    sx={{
                      backgroundColor: "white",
                      border: "solid",
                      borderRightStyle: "none",
                      borderBottomStyle: " none",
                      borderLeftStyle: "none",
                    }}
                  >
                    <Container sx={{ height: 36, lineHeight: 2 }}>
                      {" "}
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Temporibus consequuntur fugit accusantium sunt, ad quod
                      maiores, magni qui autem veniam odio, sint omnis molestias
                      tempore cumque saepe unde voluptatibus vel.{" "}
                    </Container>
                  </CardContent>
                </Collapse>
              </div>
            </Card>
          </Grid>
          <Grid
            item
            mb={5}
            sx={{
              width:"65%", mx:"auto"
             
            }}
          >
            <Card
              sx={{
              
                border: "3px solid #283991",
                boxShadow:
                  "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
              }}
            >
              <CardHeader
                title="E2PproductBank Ne Amaçla Kullanılır?"
                action={
                  <IconButton
                    sx={{
                      color: "white",
                      backgroundColor: "#283991",
                      ":hover": {
                        color: "white",
                        backgroundColor: "#283991",
                      },
                    }}
                    onClick={() => setOpen4(!open4)}
                    aria-label="expand"
                    size="small"
                  >
                    {open4 ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                  </IconButton>
                }
              ></CardHeader>
              <div style={{ backgroundColor: "rgba(211,211,211,0.4)" }}>
                <Collapse in={open4} timeout="auto" unmountOnExit>
                  <CardContent
                    sx={{
                      backgroundColor: "white",
                      border: "solid",
                      borderRightStyle: "none",
                      borderBottomStyle: " none",
                      borderLeftStyle: "none",
                    }}
                  >
                    <Container sx={{ height: 36, lineHeight: 2 }}>
                      {" "}
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Temporibus consequuntur fugit accusantium sunt, ad quod
                      maiores, magni qui autem veniam odio, sint omnis molestias
                      tempore cumque saepe unde voluptatibus vel.{" "}
                    </Container>
                  </CardContent>
                </Collapse>
              </div>
            </Card>
          </Grid>
          <Grid
            item
            mb={5}
            sx={{
              width:"65%", mx:"auto"
             
            }}
          >
            <Card
              sx={{
               
                border: "3px solid #283991",
                boxShadow:
                  "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
              }}
            >
              <CardHeader
                title="E2PproductBank Ne Amaçla Kullanılır?"
                action={
                  <IconButton
                    sx={{
                      color: "white",
                      backgroundColor: "#283991",
                      ":hover": {
                        color: "white",
                        backgroundColor: "#283991",
                      },
                    }}
                    onClick={() => setOpen5(!open5)}
                    aria-label="expand"
                    size="small"
                  >
                    {open5 ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                  </IconButton>
                }
              ></CardHeader>
              <div style={{ backgroundColor: "rgba(211,211,211,0.4)" }}>
                <Collapse in={open5} timeout="auto" unmountOnExit>
                  <CardContent
                    sx={{
                      backgroundColor: "white",
                      border: "solid",
                      borderRightStyle: "none",
                      borderBottomStyle: " none",
                      borderLeftStyle: "none",
                    }}
                  >
                    <Container sx={{ height: 36, lineHeight: 2 }}>
                      {" "}
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Temporibus consequuntur fugit accusantium sunt, ad quod
                      maiores, magni qui autem veniam odio, sint omnis molestias
                      tempore cumque saepe unde voluptatibus vel.{" "}
                    </Container>
                  </CardContent>
                </Collapse>
              </div>
            </Card>
          </Grid>
          <Grid
            item
            mb={5}
            sx={{
              width:"65%", mx:"auto"
             
            }}
          >
            <Card
              sx={{
               
                border: "3px solid #283991",
                boxShadow:
                  "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
              }}
            >
              <CardHeader
                title="E2PproductBank Ne Amaçla Kullanılır?"
                action={
                  <IconButton
                    sx={{
                      color: "white",
                      backgroundColor: "#283991",
                      ":hover": {
                        color: "white",
                        backgroundColor: "#283991",
                      },
                    }}
                    onClick={() => setOpen6(!open6)}
                    aria-label="expand"
                    size="small"
                  >
                    {open6 ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                  </IconButton>
                }
              ></CardHeader>
              <div style={{ backgroundColor: "rgba(211,211,211,0.4)" }}>
                <Collapse in={open6} timeout="auto" unmountOnExit>
                  <CardContent
                    sx={{
                      backgroundColor: "white",
                      border: "solid",
                      borderRightStyle: "none",
                      borderBottomStyle: " none",
                      borderLeftStyle: "none",
                    }}
                  >
                    <Container sx={{ height: 36, lineHeight: 2 }}>
                      {" "}
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Temporibus consequuntur fugit accusantium sunt, ad quod
                      maiores, magni qui autem veniam odio, sint omnis molestias
                      tempore cumque saepe unde voluptatibus vel.{" "}
                    </Container>
                  </CardContent>
                </Collapse>
              </div>
            </Card>
          </Grid>

        </Grid>
      </Grid>
    </>
  );
};

export default Sss;
