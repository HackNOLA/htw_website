import prisma from '../../../lib/prismaHandlers'
import axios from 'axios'
import useSWR from "swr";

// POST /api/user
// Required fields in body: title, authorEmail
// Optional fields in body: content
const fetcher = (url) => axios.get(url).then((res) => res.data);


export default async function getStaticProps (req, res, next)  {
    const newApplicant = await prisma.applicant.create({
      data: {
        first: req.body.first,
        last: req.body.last,
        email: req.body.email,
        phone: req.body.phone || "",
        info_session: req.body.info_session,
      }
  })
  // you need to pass in an id, for sum reason. prisma shit
  // console.log(res.l)
  res.redirect('/info/success')
  // res.json(newApplicant)
}