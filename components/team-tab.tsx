import Image from "next/image";
import { Card, CardContent, CardHeader } from "./ui/card";

const TeamTab: React.FC<{}> = ({ ...props }) => {
  return (
    <Card className="mt-8 " {...props}>
      <CardHeader>
        <p className="text-xl font-bold">Team </p>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          itaque omnis vitae consequatur sint rem qui explicabo temporibus ipsum
          eius. Repudiandae optio reiciendis sed? Sunt explicabo esse vero
          numquam adipisci
        </p>
        <TeamCardItem
          name="John Doe"
          role="CEO @xyz"
          image="https://pbs.twimg.com/profile_images/1383148309267632128/R5xpGGhD_400x400.jpg"
        >
          Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Repudiandae ex et autem, eius officiis illum. Qui dolor, dignissimos,
          eligendi rerum, deleniti quisquam perferendis quam reprehenderit nobis
          voluptas ad cumque neque. ipsum dolor sit amet consectetur adipisicing
          elit. Repudiandae ex et autem, eius officiis illum. Qui dolor,
          dignissimos, eligendi rerum, deleniti quisquam perferendis quam
          reprehenderit nobis voluptas ad cumque neque.
        </TeamCardItem>
        <TeamCardItem
          name="Elina Williams"
          role="CEO @xyz"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZhJnd__KHuJBDXUb4HOuxtk3UgocC6q_GhMi38xcl4PvTcx8FzWsN7Y0a_Uoni56S5zE&usqp=CAU"
        >
          Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Repudiandae ex et autem, eius officiis illum. Qui dolor, dignissimos,
          eligendi rerum, deleniti quisquam perferendis quam reprehenderit nobis
          voluptas ad cumque neque. ipsum dolor sit amet consectetur adipisicing
          elit. Repudiandae ex et autem, eius officiis illum. Qui dolor,
          dignissimos, eligendi rerum, deleniti quisquam perferendis quam
          reprehenderit nobis voluptas ad cumque neque.
        </TeamCardItem>{" "}
        <TeamCardItem
          name="John Smith"
          role="CEO @xyz"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnHFjh4WZhk-YxoQOVPCmOvx9yzwpqi_DPpIIfSkw3RAG6QluCbWtS5goDqmmu5gx4abo&usqp=CAU"
        >
          Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Repudiandae ex et autem, eius officiis illum. Qui dolor, dignissimos,
          eligendi rerum, deleniti quisquam perferendis quam reprehenderit nobis
          voluptas ad cumque neque. ipsum dolor sit amet consectetur adipisicing
          elit. Repudiandae ex et autem, eius officiis illum. Qui dolor,
          dignissimos, eligendi rerum, deleniti quisquam perferendis quam
          reprehenderit nobis voluptas ad cumque neque.
        </TeamCardItem>
      </CardContent>
    </Card>
  );
};

export default TeamTab;

interface TeamCardItemProps extends React.HTMLProps<HTMLDivElement> {
  name: string;
  role: string;
  image: string;
}

const TeamCardItem: React.FC<TeamCardItemProps> = ({
  name,
  role,
  image,
  children,
}) => {
  return (
    <div className="flex flex-col gap-4 md:gap-8 md:flex-row bg-[#E8F4FD] p-4 items-center ">
      <div className="flex flex-col items-center gap-1">
        <Image
          src={image}
          width={400}
          height={400}
          alt={name + role}
          className="rounded-lg w-32 min-w-32  aspect-square md:w-40 h-auto object-cover"
        />
        <p className="font-bold pt-3 text-lg">{name}</p>
        <p className="opacity-50 text-xs">{role}</p>
      </div>
      <div>
        <p className="leading-[170%]">{children}</p>
      </div>
    </div>
  );
};
