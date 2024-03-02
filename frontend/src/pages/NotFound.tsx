import Character from '@/components/common/Character';

export default function NotFound() {
  return (
    <div className="flex flex-col my-5">
      <Character bgcolor="#00B26E" gcolor="#F9BAAC" />
      <h3
        className="font-bold
            text-6xl
            text-center
            pb-[60px]
            text-[#000]
            bg-[#00B26E]"
      >
        No data
      </h3>
    </div>
    // <section className="flex flex-col items-center">
    //   <h3 className="text-2xl font-bold mb-2">NotFound😅</h3>
    // </section>
  );
}
