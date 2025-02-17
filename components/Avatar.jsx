import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none ">
      <img
        src="/new_rockysaggo-removebg-preview.png"
        alt="avatar"
        
        className=" w-full h-full"
      />
    </div>
  );
};

export default Avatar;
