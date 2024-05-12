using Dapper;
using TravelAppAPI.Entities;
using TravelAppAPI.Models.TravelApp;

namespace TravelAppAPI.Repositories.CityRepository
{
    public class CityRepository : ICityRepository
    {
        private readonly Context _context;

        public CityRepository(Context context)
        {
            _context = context;
        }
        public async Task<List<City>> GetAllCity()
        {
            string query = "Select * From Cities";
            using (var connection = _context.CreateConnection())
            {
                var response = await connection.QueryAsync<City>(query);                
                return response.ToList();
            }
            
        }
    }
}
