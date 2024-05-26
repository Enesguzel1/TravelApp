using Dapper;
using TravelAppAPI.Entities;
using TravelAppAPI.Models.TravelApp;

namespace TravelAppAPI.Repositories.WordRepository
{
    public class WordRepository : IWordRepository
    {
        private readonly Context _context;

        public WordRepository(Context context)
        {
            _context = context;
        }
        public async Task<List<Word>> GetWords(int id)
        {
            var query = "Select * From Words Where city_id=@city_id";
            var parameters = new DynamicParameters();
            parameters.Add("@city_id", id);
            using (var connection = _context.CreateConnection())
            {
                var response = await connection.QueryAsync<Word>(query, parameters);

                return response.ToList();
            }
        }
    }
}
