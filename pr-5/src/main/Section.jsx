import React from 'react'
import { category,data,category2,data2 } from '../data'
import { useState } from 'react'

const Section = () => {
  const [record,setRecord] = useState(data)
  const [record2,setRecord2] = useState(data2)

  const FilterData = (item)=>{
    let datas = data.filter((val)=> val.category === item);
    setRecord(datas.slice(0, 2))
  }

  const FilterData2 = (item)=>{
    let datas2 = data2.filter((val)=> val.category === item);
    setRecord2(datas2.slice(0, 2))
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
                <div class="col-8 d-flex p-2">
                    {
                        record.map((val)=>{
                        return(
                            <div>
                                <div class="col-6 m-1" key={val.id}>
                                    <img src={val.img} />
                                    <button>Shop Now</button>
                                </div>
                            </div>
                        )
                        })
                    }
                </div>
            </div>

                <br></br><br></br>

            <div class="col-12 d-flex">
                <div class="col-4 cet">
                {
                    category2.map((val)=>{
                        return(
                        <button key={val.id} onClick={()=> FilterData2(val.name)} className="btn">{val.name}</button>
                        )
                    })
                }
                </div>
                <div class="col-8 d-flex p-2">
                {
                        record2.map((val)=>{
                        return(
                            <div>
                                <div className="card m-2" style={{width: '18rem'}}>
                                    <img src={val.img} className="card-img-top" />
                                    <div className="card-body">
                                        <p className="card-text">{val.category}</p>
                                        <h5 className="card-title">{val.name}</h5>
                                        <a href="#" className="btn btn-primary ">Shop Now</a>
                                    </div>
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