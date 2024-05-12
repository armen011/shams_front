const Skeleton = () => {
  return (
    <div className='w-full'>
      {Array.from({ length: 20 }).map((_, idx) => (
        <div
          className='mb-2 h-6 w-full animate-pulse rounded-lg bg-slate-200'
          key={idx}
        />
      ))}
    </div>
  );
};

export default Skeleton;
