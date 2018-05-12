const { expext } = require('chai')
const { supertest } = require('supertest')
const app = require('app.js')
describe('My first test code',()=>{
	it('hello world',(done)=>{
		expect(true).to.equal(true)
		done()	
	})
})//설명

describe('/api/post GET test',()=>{
	if('it should be 5 posts',(done)=>{
		request(app).get('/api/post').expect(200).end((err,data)=>{
			if(err){
				done(err)
				return
			}
			expext(data.length).to.equal(5)
			done()
		})
	})
})
