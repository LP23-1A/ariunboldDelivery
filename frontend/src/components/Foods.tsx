export default function Foods(){
    const MockData = [
        {
            price: "34,800₮",
            img: "https://s3-alpha-sig.figma.com/img/1f91/a1b6/d973c90c192043aefe86e4258acae7e6?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mrKNTktvMZdf~8BPiiTJURm8j4Kgr9J-QbMQaiBso8EnhWMJO4lCBmYpeOi8zOCWUdY5mCD4P8erlo~ezrBlACxlLcdubo8EfKGxaNj6VzVrG0lBT2tQvilUGhaIVwFVa4sVDMo3vbxBIVl5HZDMhIRZc2HMBZ5tj1I5EpBtVHUOtPXBKHFGPyOiO2ZbGpMKBY5wrnSlojyvMvAluqbn9kffeGhZ3JMY6KT~9pdSUVzI8hzRblDe8U0xxkNCIpkYnVXItGDGt-zcuk2FlVJA~aKPcdsozyEwjWnXUlO6OeLoM~rHgxn-b9hIjTv6hhDQeIxPvtvRqjbGKnNWquK8ug__",
            name: "Main Pizza",
            discount: ""
        },
        {
            price: "34,800₮",
            img: "https://s3-alpha-sig.figma.com/img/1f91/a1b6/d973c90c192043aefe86e4258acae7e6?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mrKNTktvMZdf~8BPiiTJURm8j4Kgr9J-QbMQaiBso8EnhWMJO4lCBmYpeOi8zOCWUdY5mCD4P8erlo~ezrBlACxlLcdubo8EfKGxaNj6VzVrG0lBT2tQvilUGhaIVwFVa4sVDMo3vbxBIVl5HZDMhIRZc2HMBZ5tj1I5EpBtVHUOtPXBKHFGPyOiO2ZbGpMKBY5wrnSlojyvMvAluqbn9kffeGhZ3JMY6KT~9pdSUVzI8hzRblDe8U0xxkNCIpkYnVXItGDGt-zcuk2FlVJA~aKPcdsozyEwjWnXUlO6OeLoM~rHgxn-b9hIjTv6hhDQeIxPvtvRqjbGKnNWquK8ug__",
            name: "Main Pizza",
            discount: ""
        },
        {
            price: "34,800₮",
            img: "https://s3-alpha-sig.figma.com/img/1f91/a1b6/d973c90c192043aefe86e4258acae7e6?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mrKNTktvMZdf~8BPiiTJURm8j4Kgr9J-QbMQaiBso8EnhWMJO4lCBmYpeOi8zOCWUdY5mCD4P8erlo~ezrBlACxlLcdubo8EfKGxaNj6VzVrG0lBT2tQvilUGhaIVwFVa4sVDMo3vbxBIVl5HZDMhIRZc2HMBZ5tj1I5EpBtVHUOtPXBKHFGPyOiO2ZbGpMKBY5wrnSlojyvMvAluqbn9kffeGhZ3JMY6KT~9pdSUVzI8hzRblDe8U0xxkNCIpkYnVXItGDGt-zcuk2FlVJA~aKPcdsozyEwjWnXUlO6OeLoM~rHgxn-b9hIjTv6hhDQeIxPvtvRqjbGKnNWquK8ug__",
            name: "Main Pizza",
            discount: ""
        },
        {
            price: "34,800₮",
            img: "https://s3-alpha-sig.figma.com/img/1f91/a1b6/d973c90c192043aefe86e4258acae7e6?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mrKNTktvMZdf~8BPiiTJURm8j4Kgr9J-QbMQaiBso8EnhWMJO4lCBmYpeOi8zOCWUdY5mCD4P8erlo~ezrBlACxlLcdubo8EfKGxaNj6VzVrG0lBT2tQvilUGhaIVwFVa4sVDMo3vbxBIVl5HZDMhIRZc2HMBZ5tj1I5EpBtVHUOtPXBKHFGPyOiO2ZbGpMKBY5wrnSlojyvMvAluqbn9kffeGhZ3JMY6KT~9pdSUVzI8hzRblDe8U0xxkNCIpkYnVXItGDGt-zcuk2FlVJA~aKPcdsozyEwjWnXUlO6OeLoM~rHgxn-b9hIjTv6hhDQeIxPvtvRqjbGKnNWquK8ug__",
            name: "Main Pizza",
            discount: ""
        }
    ]
    return (
        <div className="flex gap-[24px]">
            {
                MockData.map((el) => {
                    return (
                        <div className="flex flex-col gap-[14px]">
                            <img className="w-[282px] h-[186px] rounded-[16px] object-cover" src={el.img} alt="" />
                            <div className="flex flex-col">
                                <p className="text-[18px] text-black">{el.name}</p>
                                <p className="text-[18px] text-[#18BA51]">{el.price}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}