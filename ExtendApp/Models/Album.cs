using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExtendApp.Models
{
    public class Album
    {
        public string Title { get; set; }
        public List<Song> Songs { get; set; }
    }
}
