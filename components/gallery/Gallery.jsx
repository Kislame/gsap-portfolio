import Image from 'next/image';

const Gallery = () => {
  return (
    <div className="grid grid-cols-2 gap-9 grid-flow-dense place-items-center">
      <Image
        alt="phtot"
        src="https://picsum.photos/400/600?random=1"
        width={400}
        height={600}
      />
      <Image
        alt="phtot"
        src="https://picsum.photos/400/600?random=2"
        width={400}
        height={600}
      />
      <Image
        alt="phtot"
        src="https://picsum.photos/400/600?random=3"
        width={400}
        height={600}
      />
      <Image
        alt="phtot"
        src="https://picsum.photos/400/600?random=4"
        width={400}
        height={600}
      />
      <Image
        alt="phtot"
        src="https://picsum.photos/400/600?random=5"
        width={400}
        height={600}
      />
      <Image
        alt="phtot"
        src="https://picsum.photos/400/600?random=6"
        width={400}
        height={600}
      />
    </div>
  );
};

export default Gallery;
