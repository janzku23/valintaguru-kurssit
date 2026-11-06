import FreeCourseSidebar from "@/components/FreeCourseSidebar";

type Props = { active: "overview" | "exercises" };

export default function FreeCourseNav({ active }: Props) {
  return <FreeCourseSidebar active={active} />;
}
