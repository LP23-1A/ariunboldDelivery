'use client';
import Footer from "@/components/Footer";
import TopBar from "../../components/TopBar";
import TextField from '@mui/material/TextField';
import InputAdornments from "@/components/Input";
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import React from "react";

export default function Login(){
    const [checked, setChecked] = React.useState(true);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
    return(
        <div className="flex flex-col items-center gap-[75px] bg-white">
            <TopBar/>
            <div className="flex flex-col items-center gap-[48px]">
                <p className="text-black text-[28px] w-[384px] text-center">Бүртгүүлэх</p>
                <div className="flex flex-col gap-[16px] items-center justify-center">
                    <TextField sx={{width: '384px', height: '48px'}}
                        id="outlined-password-input"
                        label="Нэр"
                        type="text"
                        autoComplete="current-password"
                    />
                    <TextField sx={{width: '384px', height: '48px'}}
                        id="outlined-password-input"
                        label="Имэйл"
                        type="text"
                        autoComplete="current-password"
                    />
                    <TextField sx={{width: '384px', height: '48px'}}
                        id="outlined-password-input"
                        label="Утас"
                        type="text"
                        autoComplete="current-password"
                    />
                    <InputAdornments/>
                    <InputAdornments/>
                </div>
                <div className="flex flex-col gap-[8px]">
                    <div className="text-black text-[14px] flex items-center">
                        <Checkbox
                            checked={checked}
                            onChange={handleChange}
                            inputProps={{ 'aria-label': 'controlled' }}
                        />
                        Үйлчилгээний нөхцөл зөвшөөрөх
                    </div>
                    <Button className="border-[#18BA51] text-black w-[384px] h-[48px]" variant="outlined">Бүртгүүлэх</Button>
                </div>
            </div>
            <Footer/>
        </div>
    )
}