using System.Collections.Generic;
using System.Linq;

namespace dotnet_api.ProfileLogic
{
    public class ProfileAdmin
    {
        private List<Profile> Profiles { get; set; }
        private int Id { get; set; }

        public ProfileAdmin()
        {
            Profiles = new List<Profile>();
            Id = 1;
        }
        public List<Profile> GetProfiles() =>
            Profiles;

        public Profile GetProfile(int id) =>
            Profiles.FirstOrDefault(p => p.Id == id);

        public Profile GetProfile(string name) =>
            Profiles.FirstOrDefault(p => p.FirstName == name);

        public void AddProfile(Profile profile){
            profile.Id = Id++;
            Profiles.Add(profile);
        }

        public void UpdateProfile(Profile profile)
        {
            var currentProfile = GetProfile(profile.Id);

            currentProfile.FirstName = profile.FirstName;
            currentProfile.LastName = profile.LastName;
            currentProfile.Age = profile.Age;
        }

        public void DeleteProfile(int id) =>
            Profiles.RemoveAll(p => p.Id == id);

    }
}