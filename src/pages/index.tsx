import Layout from "../components/layout";
import Box from "../components/box";

export default function Home() {
  return (
    <Layout>
      <div className="mansory" style={{ gridTemplateRows: "280px 280px 280px 280px" }}>
        <Box className="box-2w box-2h">Box1</Box>
        <Box>Box 2</Box>
        <Box className="box-2h">Box 3</Box>
        <Box>Box 4</Box>
        <Box className="box-2h">Box 5</Box>
        <Box className="box-2w">Box 6</Box>
        <Box>Box 7</Box>
        <Box>Box 8</Box>
        <Box className="box-2w">Box 9</Box>
      </div>
    </Layout>
  )
}
