type Props = {
  params: {
    courseId: string;
    materialId: string;
  };
};

export default function courseDetail({ params }: Props) {
  return (
    <div>
      <h1>
        Melihat materi {params.materialId} untuk mata pelajaran {""}
        {params.courseId}
      </h1>
    </div>
  );
}
