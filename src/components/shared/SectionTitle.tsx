const SectionTitle = ({ title }: { title: string }) => {
  return (
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold border-orange-400 ps-2 border-l-6 mb-6 md:mb-8 lg:mb-10">
      {title}
    </h2>
  );
};

export default SectionTitle;
