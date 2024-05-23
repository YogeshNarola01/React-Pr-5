import React from 'react'
import { category,data } from '../data'
import { useState } from 'react'

const Section = () => {
  const [record,setRecord] = useState(data)
  const FilterData = (item)=>{
    let datas = data.filter((val)=> val.category === item);
    setRecord(datas.slice(0, 2))
}

  return (
    <div className="container">
        <div className="row">
            <div class="col-12 d-flex ">
                <div class="col-4 cet">
                        {
                            category.map((val)=>{
                                return(
                                    <button key={val.id} onClick={()=> FilterData(val.name)} className="btn">{val.name}</button>
                                )
                            })
                        }
                </div>
                <div class="col-8 d-flex">
                    {
                        record.map((val)=>{
                        return(
                            <div>
                                <div class="col-6 picv" key={val.id}>
                                    <img src={val.img} />
                                    <button>Shop Now</button>
                                </div>
                            </div>
                        )
                        })
                    }
                </div>
            </div>
        </div>
    </div>

  )
}

export default Section