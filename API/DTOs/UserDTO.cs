using System;

namespace API.DTOs;

public class UserDTO
{
    public required String Username { get; set; }
    public required String TokenKey { get; set; }
}
