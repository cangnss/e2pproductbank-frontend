import { Avatar, Box } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

export default function Comments(props) {
  console.log("props:", props);
  return (
    <div>
      {props?.comments.map((product) => {
        return (
          <div
            style={{
              marginBottom: "2rem",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Avatar>
                <PersonIcon />
              </Avatar>
            </Box>
            <Box>
              <h3>Anonymous Person</h3>
              <p>{product.comment}</p>
            </Box>
          </div>
        );
      })}
    </div>
  );
}
