import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <div className="mansory" style={{ gridTemplateRows: "280px 280px 280px 280px" }}>
        <div className="box box-2w"></div>
        <div className="box"></div>
        <div className="box box-2h"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box box-2h"></div>
        <div className="box box-2w"></div>
        <div className="box"></div>
        <div className="box box-2w"></div>
        <div className="box box-2w"></div>
      </div>
    </Layout>
  )
}
