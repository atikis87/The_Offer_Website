import app from '../app.js'


describe('Server', () =>{
    it('should run', () =>{
        return request(app).expect(200)

    });
});
