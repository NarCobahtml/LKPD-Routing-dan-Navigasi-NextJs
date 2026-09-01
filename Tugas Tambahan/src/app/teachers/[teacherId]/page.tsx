//src/app/blogs/[blogId]/page.tsx

type Props = {
  params: {
    teacherId: string;
  };
};

export default function teacherDetail({ params }: Props) {
  return <h1> Melihat Profil Akademik untuk Guru: {params.teacherId}</h1>;
}
