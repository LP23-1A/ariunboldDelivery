import Footer from "@/components/Footer";
import TopBar from "../../components/TopBar";
import InputAdornments from "@/components/Input";
import Button from '@mui/material/Button';

export default function Login(){
    return(
        <div className="flex flex-col items-center gap-[75px] bg-white">
            <TopBar/>
            <div className="flex flex-col items-center gap-[48px]">
                <p className="text-black text-[28px] w-[384px] text-center">Нэвтрэх</p>
                <div>
                    <InputAdornments/>
                </div>
                <div className="flex flex-col gap-[32px]">
                    <Button className="bg-[#18BA51] w-[384px] h-[48px]" variant="contained">Нэвтрэх</Button>
                    <p className="text-[14px] text-center text-[#3F4145]">Эсвэл</p>
                    <Button className="border-[#18BA51] text-black w-[384px] h-[48px]" variant="outlined">Бүртгүүлэх</Button>
                </div>
            </div>
            <Footer/>
        </div>
    )
}