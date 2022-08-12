import { Avatar, Box } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { useEffect } from "react";

export default function Comments(props) {
  console.log("props:", props);
  const comments = props?.comments
  useEffect(()=>{
    let mounted = true

    return () => {
      mounted = false;
    }
  },[comments])
  return (
    <div>
      {comments.map((product) => {
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
              <p>{product.commentText}</p>
            </Box>
          </div>
        );
      })}
    </div>
  );
}
