import Card from "./global/Card"

const Employee = (props:any) => {
    return (
        <Card>
          <div className='d-flex flex-md-wrap flex-xl-nowrap align-items-center justify-content-space-between mb-2'>
              <div className='in-card__profile d-flex'>
                <div className='in-profile__img flex-shrink-0'>
                    <img src={props.profileImg} />
                </div>
                <div className='pl-1'>
                    <div className='in-title__block'>{props.name}</div>
                    <p className='in-para in-text--gray'>{props.designation}</p>
                </div>
              </div>
              <div className='mt-md-2 mt-xl-0 text-center flex-shrink-0'>
                <div className=''>
                    <img src={`${props.decrease ? "./icons/decrease.svg" : "./icons/increase.svg"}`} />
                </div>
              <div className={`in-title__section ${props.decrease ? "in-text--danger" : "in-text--success"}`}>{props.amount}</div>
              </div>
          </div>
          <div className=''>
              <p className='mb-1 in-para in-text--dark-gray'>{props.taskPending} from {props.taskTotal} tasks completed</p>
              <div className='in-progress__bar-outline in-progress__bar-typeB'>
              <span className='in-progress__bar' style={{ width: `${props.percentage}%` }}></span>
              </div>
          </div>
        </Card>
    )
}

export default Employee