"use client";

interface ViewUserButtonProps {
  userId: number;
}

const ViewUserButton: React.FC<ViewUserButtonProps> = ({ userId }) => {
  const handleClick = () => alert(`user id : ${userId}`);
  return (
    <>
      <button className="bg-indigo-500 px-4 py-2 rounded-lg" onClick={handleClick}>Lihat User</button>
    </>
  );
};

export default ViewUserButton;
