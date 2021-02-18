export type AuthorCardProps = {
  author: {
    username: string;
    picture: {
      url: string;
    };
  };
};

const AuthorCard = ({ author }: AuthorCardProps) => {
  return (
    <div className="flex items-center mt-4 space-x-4">
      <img
        className="w-14 h-14 object-cover rounded-full border border-gray-900"
        src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${author.picture.url}`}
        alt=""
      />
      <div className="leading-none">
        <span className="uppercase text-xs text-gray-600">Author</span>
        <p className="text-lg text-gray-900">@{author.username}</p>
      </div>
    </div>
  );
};

export default AuthorCard;
