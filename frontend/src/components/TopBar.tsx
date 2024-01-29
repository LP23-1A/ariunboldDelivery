import Bag from "./icons/Bag";
import Pinecone from "./icons/Pinecone";
import Profile from "./icons/Profile";
import Search from "./icons/Search";

export default function TorBar(){
    return (
        <div className="flex justify-between px-[24px] py-[8px] w-[1258px] bg-white">
            <div className="flex gap-[24px] justify-center items-center">
                <Pinecone/>
                <div className="flex gap-[8px]">
                    <button className="text-[#18BA51] text-[14px] px-[16px] py-[8px]">НҮҮР</button>
                    <button className="text-[14px] text-black px-[16px] py-[8px]">ХООЛНЫ ЦЭС</button>
                    <button className="text-[14px] text-black px-[16px] py-[8px]">ХҮРГЭЛТИЙН БҮС</button>
                </div>
            </div>
            <div className="flex justify-center items-center gap-[8px]">
                <div className="flex gap-[8px] px-[16px] py-[8px] border-[1px] border-black rounded-[8px] justify-center items-center">
                    <Search/>
                    <input className="outline-none text-[16px] bg-white" type="text" placeholder="Хайх"/>
                </div>
                <div className="flex justify-center items-center gap-[8px] px-[16px] py-[8px]">
                    <Bag/>
                    <p className="text-[14px] text-black">Сагс</p>
                </div>
                <div className="flex justify-center items-center gap-[8px] px-[16px] py-[8px]">
                    <Profile/>
                    <p className="text-[14px] text-black">Нэвтрэх</p>
                </div>
            </div>
        </div>
    )
}