import { Avatar, Box } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { useEffect, useState } from "react";

export default function Comments(props) {
  const [updatedComments, setUpdatedComments] = useState(props?.comments)
  useEffect(()=>{
    
  },[updatedComments])
  return (
    <div>
      {updatedComments?.map((product) => {
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
