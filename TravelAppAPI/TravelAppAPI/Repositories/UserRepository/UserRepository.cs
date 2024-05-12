using Dapper;
using Microsoft.AspNetCore.Mvc;
using TravelAppAPI.Entities;
using TravelAppAPI.Models.TravelApp;

namespace TravelAppAPI.Repositories.UserRepository
{
    public class UserRepository : IUserRepository
	{
		private readonly Context _context;

		public UserRepository(Context context)
		{
			_context = context;
		}

        public async Task<string> Login(string username, string password)
        {
            string query = "SELECT * FROM Users WHERE Username = @Username";
            var parameters = new DynamicParameters();
            parameters.Add("@Username", username);

            using (var connection = _context.CreateConnection())
            {
                var user = await connection.QuerySingleOrDefaultAsync<User>(query, parameters);

                if (user != null && user.Password == password)
                {
                    return "success";
                }
                else
                {
                    return "Login Fail";
                }
            }
        }

        public async Task<string> CreateUser(string username, string password)
        {
            string queryCheck = "SELECT COUNT(*) FROM Users WHERE Username = @username";
            var parametersCheck = new DynamicParameters();
            parametersCheck.Add("@username", username);

            using (var connection = _context.CreateConnection())
            {
                int userCount = await connection.ExecuteScalarAsync<int>(queryCheck, parametersCheck);

                if (userCount > 0)
                {
                    // Kullanıcı adı zaten varsa hata dön
                    return "Username already exists";
                }
                else
                {
                    // Kullanıcı adı yoksa yeni kullanıcı oluştur
                    string queryInsert = "INSERT INTO Users (Username, Password) VALUES (@username, @password)";
                    var parametersInsert = new DynamicParameters();
                    parametersInsert.Add("@username", username);
                    parametersInsert.Add("@password", password);

                    int rowsAffected = await connection.ExecuteAsync(queryInsert, parametersInsert);

                    if (rowsAffected != 0)
                    {
                        return "success";
                    }
                    else
                    {
                        return "Error occurred";
                    }
                }
            }
        }


    }
}
