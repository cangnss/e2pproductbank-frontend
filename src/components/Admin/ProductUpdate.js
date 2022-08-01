import { Paper, Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import TextareaAutosize from "@mui/material/TextareaAutosize";

const ProductUpdate = () => {
  return (
    <>
      <Paper
        elevation={3}
        style={{ width: "50%", margin: "auto", padding: "5rem" }}
      >
        <Grid container>
          <Grid
            container
            display="flex"
            justifyContent="center"
            alignItems="center"
            direction="row"
            spacing={10}
          >
            <Grid item display="flex" direction="row">
              <InputLabel
                sx={{
                  marginRight: "1rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Ürün Adı:
              </InputLabel>
              <TextField id="outlined-basic" variant="outlined" size="small" />
            </Grid>
            <Grid item display="flex" direction="row">
              <InputLabel
                sx={{
                  marginRight: "1rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Satıcı Güncelle:
              </InputLabel>
              <TextField id="outlined-basic" variant="outlined" size="small" />
            </Grid>
          </Grid>
          <Grid
            container
            display="flex"
            justifyContent="center"
            alignItems="center"
            direction="row"
            spacing={10}
          >
            <Grid item display="flex" direction="row">
              <InputLabel
                sx={{
                  marginRight: "1rem",
                  marginTop: "2rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Ürün Açıklaması:
              </InputLabel>
              <TextareaAutosize
                maxRows={4}
                aria-label="maximum height"
                placeholder="Maximum 4 rows"
                style={{ marginTop: "2rem", width: 200 }}
              />
            </Grid>
            <Grid item display="flex" direction="row">
              <InputLabel
                sx={{
                  marginRight: "1rem",
                  marginTop: "2rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Fotoğraf Güncelle:
              </InputLabel>
              <Button variant="contained" component="label" sx={{ marginTop: "2rem" }}>
               Yükle
                <input type="file" hidden />
              </Button>
            </Grid>
          </Grid>
          <Grid
            container
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            direction="row"
            spacing={10}
          >
            <Grid item display="flex" direction="row">
              <Button variant="contained" sx={{ marginTop: "2rem" }}>
                Kaydet
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};
export default ProductUpdate;
