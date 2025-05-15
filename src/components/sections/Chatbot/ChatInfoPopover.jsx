import { useState } from "react";
import {
  Popover,
  Typography,
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

import InfoIcon from "../../../icons/info-icon";

const ChatInfoPopover = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "chat-info-popover" : undefined;

  return (
    <div>
      <button
        variant="outlined"
        onClick={handleClick}
        className="border-0 outline-0 cursor-pointer hover:bg-purple-800 rounded-circle p-1"
      >
        <InfoIcon />
      </button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        sx={{
          "& .MuiPopover-paper": {
            width: 300,
            borderRadius: 2,
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
          },
        }}
      >
        <Box paddingRight={1} paddingY={2}>
          <Typography variant="h6" align="center" gutterBottom>
            💡 Chatbot Information
          </Typography>
          <Divider sx={{ marginY: 1 }} />
          <List dense>
            <ListItem>
              <ListItemText
                slotProps={{
                  primary: {
                    sx: { fontWeight: "bold" },
                  },
                  secondary: {
                    sx: { fontSize: "0.85rem" },
                  },
                }}
                sx={{
                  "& .MuiTypography-body2": {
                    marginTop: "4px"
                  },
                }}
                primary="🔧 Powered by AI"
                secondary="This chatbot is built using OpenAI, LangChain, and RAG (Retrieval-Augmented Generation). Since OpenAI’s LLM model incurs costs for each chat completion, I kindly request you to limit your queries to 5-6 relevant questions for now."
              />
            </ListItem>
            <ListItem>
              <ListItemText
                slotProps={{
                  primary: {
                    sx: { fontWeight: "bold" },
                  },
                  secondary: {
                    sx: { fontSize: "0.85rem" },
                  },
                }}
                sx={{
                  "& .MuiTypography-body2": {
                    marginTop: "4px",
                  },
                }}
                primary="⚙️ A Learning Experience"
                secondary="This is my first attempt at creating a chatbot. While I've rigorously tested it to ensure accurate and helpful responses, there might be rare instances where the answers stray off-track."
              />
            </ListItem>
            <ListItem>
              <ListItemText
                slotProps={{
                  primary: {
                    sx: { fontWeight: "bold" },
                  },
                  secondary: {
                    sx: { fontSize: "0.85rem" },
                  },
                }}
                sx={{
                  "& .MuiTypography-body2": {
                    marginTop: "4px", // Adds gap between primary and secondary text
                  },
                }}
                primary="🛠️ No Follow-up chats (yet)"
                secondary={
                  <>
                    Currently, the chatbot doesn't support follow-up chats due to OpenAI charges. I'm actively exploring free, high-quality alternatives on Hugging Face. If you have suggestions or insights about such models, I'd love to hear from you! Feel free to email me at{" "}
                    <strong>lokesh.kaggarwal1397@gmail.com</strong>.
                  </>
                }
              />
            </ListItem>
          </List>
        </Box>
      </Popover>
    </div>
  );
};

export default ChatInfoPopover;
