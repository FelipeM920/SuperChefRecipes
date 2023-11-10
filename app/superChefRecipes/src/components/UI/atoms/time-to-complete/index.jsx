import "./style.scss";
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export default function TimeToComplete() {
  return (
    <section className='time-to-complete'>
      <AccessTimeIcon color="primary"></AccessTimeIcon>
      <span>25 min</span>
    </section>
  )
}