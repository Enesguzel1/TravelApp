using Dapper;
using Microsoft.AspNetCore.Mvc;
using TravelAppAPI.Entities;
using TravelAppAPI.Models.TravelApp;

namespace TravelAppAPI.Repositories.FoodRepository
{
    public class FoodRepository : IFoodRepository
    {
        private readonly Context _context;

        public FoodRepository(Context context)
        {
            _context = context;
        }
        public async Task<List<Food>> GetFoodByCity(int id)
        {
            var query = "Select * From Foods Where city_id=@city_id";
            var parameters = new DynamicParameters();
            parameters.Add("@city_id", id);
            using (var connection = _context.CreateConnection())
            {
                var response = await connection.QueryAsync<Food>(query, parameters);

                return response.ToList();
            }
        }
    }
}
