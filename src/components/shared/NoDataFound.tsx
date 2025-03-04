const NoDataFound = ({ name }: { name: string }) => {
  return (
    <div className="h-[200px] w-full flex justify-center items-center">
      <p className="text-2xl font-medium">No {name} Found!</p>
    </div>
  );
};

export default NoDataFound;
