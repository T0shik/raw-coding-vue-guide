using ExtendApp.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace ExtendApp.Controllers
{
    public class ModelBindingController : Controller
    {
        public Album TestAlbum => new Album
        {
            Title = "Hi",
            Songs = new List<Song>
            {
                new Song { Title = "Really good song" },
                new Song { Title = "We got more of those" },
                new Song { Title = "This one is good too" }
            }
        };

        public IActionResult MvcOnly()
        {
            return View(TestAlbum);
        }

        public IActionResult MvcAndVue()
        {
            return View(TestAlbum);
        }

        [HttpPost]
        public IActionResult CreateAlbum(Album album)
        {
            return View();
        }

        #region Vue Only 
        public IActionResult VueOnly()
        {
            return View();
        }

        public IActionResult GetVueOnlyData()
        {
            return Ok(TestAlbum);
        }

        [HttpPost]
        public IActionResult PostVueOnlyData([FromBody] Album album)
        {
            return View();
        }
        #endregion

        public IActionResult Managed()
        {
            return View();
        }
    }
}
