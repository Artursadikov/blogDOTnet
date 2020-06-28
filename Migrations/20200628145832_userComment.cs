using Microsoft.EntityFrameworkCore.Migrations;

namespace Blog.Migrations
{
    public partial class userComment : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "userNameCommented",
                table: "Comments",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "userNameCommented",
                table: "Comments");
        }
    }
}
