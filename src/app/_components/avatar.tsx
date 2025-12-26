type Props = {
  name: string;
  picture: string;
};

const Avatar = ({ name, picture }: Props) => {
  // return (
  //   <div className="flex items-center">
  //     <img src={picture} className="w-12 h-12 rounded-full mr-4" alt={name} />
  //     <div className="text-xl font-bold">{name}</div>
  //   </div>
  // );

  // design 2: border ring
  // return (
  //   <div className="flex items-center gap-4">
  //     <div className="relative">
  //       <img src={picture} alt={name} className="w-14 h-14 rounded-full ring-2 ring-gray-200 ring-offset-2"/>
  //     </div>
  //     <div className="font-semibold text-lg">{name}</div>
  //   </div>
  // )

  // design 3: center avatar
  // return (
  //   <div className="flex flex-col items-center text-center">
  //     <img src={picture} className="w-20 h-20 rounded-full mb-3" alt={name} />
  //     <div className="font-bold text-lg">{name}</div>
  //   </div>
  // )

  // design 4: background card
  // return (
  //   <div className="inline-flex items-center gap-3 bg-gray-50 rounded-full pr-5 pl-1 py-1 border border-gray-200">
  //     <img src={picture} alt={name} className="w-10 h-10 rounded-full" />
  //     <div className="font-semibold text-sm">{name}</div>
  //   </div>
  // )

  // design 5: minimal text
  return (
    <div className="flex items-center gap-3">
      <img src={picture} alt={name} className="w-10 h-10 rounded-full" />
      <div className="text-sm font-medium text-gray-700">{name}</div>
    </div>
  )
};

export default Avatar;
