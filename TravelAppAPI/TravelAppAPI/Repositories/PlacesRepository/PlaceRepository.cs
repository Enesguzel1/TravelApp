using Dapper;
using TravelAppAPI.Entities;
using TravelAppAPI.Models.TravelApp;

namespace TravelAppAPI.Repositories.PlacesRepository
{
    public class PlaceRepository : IPlaceRepository
    {
        private readonly Context _context;

        public PlaceRepository(Context context)
        {
            _context = context;
        }

        public async Task<List<PlaceToVisit>> GetPlaceToVisitByID(int id)
        {
            var query = "Select * From PlacesToVisit Where city_id=@city_id";
            var parameters = new DynamicParameters();
            parameters.Add("@city_id", id);
            using (var connection = _context.CreateConnection())
            {
                var response = await connection.QueryAsync<PlaceToVisit>(query, parameters);

                return response.ToList();
            }
        }
    }
}
