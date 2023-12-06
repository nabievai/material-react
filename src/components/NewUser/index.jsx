import React from "react";
import Button from '@mui/material/Button';
import { createSvgIcon } from '@mui/material/utils';

const PlusIcon = createSvgIcon(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2.0}
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>,
    'Plus',
  );
  
  const titleBtnStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '10px 120px'
  };
  
  const blackButtonStyle = {
    color: 'white',
    backgroundColor: '#232d37',
    borderRadius: '8px',
    padding: '10px 15px',
    fontSize: '12px',
    fontWeight: '700',
  };
  
  const ArrowStyle = {
    width: '20px',
    height: '20px',
    marginLeft: '3px',
  };
  


function TitleBtn() {
    return (
        <div style={titleBtnStyle}>
          <h2>Users</h2>
          <Button variant="contained" startIcon={<PlusIcon />} style={blackButtonStyle}>
            New User
          </Button>
        </div>
    );
  }
  
  export default TitleBtn;