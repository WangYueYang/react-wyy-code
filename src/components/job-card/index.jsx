import './index.css'

const JobCard = ({children}) => {
  return (
    <div className="job-card">
      <div className="job-title">
        <span>最新职位</span>
        <span>更多</span>
      </div>
      <div className="job-content">{children}</div>
    </div>
  )
}

export default JobCard